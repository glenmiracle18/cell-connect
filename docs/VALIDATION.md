# Form Validation in Cell Connect 📝

## Directory Structure

```
routes/
├── cell/
│   ├── attendance/
│   │   ├── route.tsx
│   │   └── schema.ts      # Attendance-related schemas
│   ├── members/
│   │   ├── route.tsx
│   │   └── schema.ts      # Member-related schemas
│   └── giving/
│       ├── route.tsx
│       └── schema.ts      # Giving-related schemas
```

## Schema Examples

### Member Schema

```typescript
// routes/cell/members/schema.ts
import { z } from 'zod';

export const memberSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    phone: z
        .string()
        .regex(/^[0-9]+$/, 'Must be a valid phone number')
        .min(10, 'Phone number must be at least 10 digits'),
    email: z.string().email('Must be a valid email').optional(),
    status: z.enum(['active', 'inactive']),
    joinDate: z.string(),
    // Additional fields
});

export const memberSearchSchema = z.object({
    query: z.string().optional(),
    status: z.enum(['active', 'inactive', 'all']).optional(),
    sortBy: z.enum(['name', 'joinDate']).optional(),
});
```

### Form Implementation

```typescript
// routes/cell/members/route.tsx
import { parseWithZod } from '@conform-to/zod';
import { memberSchema } from './schema';

export async function action({ request }: ActionArgs) {
    const formData = await request.formData();
    const submission = parseWithZod(formData, {
        schema: memberSchema,
    });

    if (submission.status !== 'success') {
        return json(submission.reply());
    }

    try {
        await db.member.create({
            data: submission.value,
        });
        return redirect('.');
    } catch (error) {
        return json(
            submission.reply({
                formErrors: ['Failed to create member'],
            })
        );
    }
}

export default function MembersRoute() {
    const lastResult = useActionData<typeof action>();
    const [form, fields] = useForm({
        lastResult,
        onValidate({ formData }) {
            return parseWithZod(formData, { schema: memberSchema });
        },
        shouldValidate: 'onBlur',
    });

    return (
        <Form method="post" {...form.props} className="space-y-4">
            <div>
                <Label htmlFor={fields.name.id}>Name</Label>
                <Input
                    {...getInputProps(fields.name, { type: 'text' })}
                    className={fields.name.errors ? 'border-red-500' : ''}
                />
                <ErrorMessage>{fields.name.errors}</ErrorMessage>
            </div>

            <div>
                <Label htmlFor={fields.phone.id}>Phone</Label>
                <Input
                    {...getInputProps(fields.phone, { type: 'tel' })}
                    className={fields.phone.errors ? 'border-red-500' : ''}
                />
                <ErrorMessage>{fields.phone.errors}</ErrorMessage>
            </div>

            {/* Other fields */}

            <Button type="submit">Save Member</Button>
        </Form>
    );
}
```

### Attendance Schema

```typescript
// routes/cell/attendance/schema.ts
import { z } from 'zod';

export const attendanceSchema = z.object({
    date: z.string(),
    members: z.array(
        z.object({
            id: z.string(),
            status: z.enum(['present', 'absent']),
            note: z.string().optional(),
        })
    ),
    totalPresent: z.number().min(0),
    totalAbsent: z.number().min(0),
});

export const attendanceSearchSchema = z.object({
    startDate: z.string(),
    endDate: z.string(),
    memberFilter: z.string().optional(),
});
```

### Giving Schema

```typescript
// routes/cell/giving/schema.ts
import { z } from 'zod';

export const givingSchema = z.object({
    memberId: z.string(),
    amount: z.number().positive('Amount must be greater than 0'),
    category: z.enum(['tithe', 'offering', 'special']),
    date: z.string(),
    notes: z.string().optional(),
    method: z.enum(['cash', 'mobile']),
});
```

## Reusable Form Components

### Error Message

```typescript
// components/ui/error-message.tsx
export function ErrorMessage({ children }: { children: React.ReactNode }) {
    if (!children) return null;

    return <p className="text-sm text-red-500 mt-1">{children}</p>;
}
```

### Form Field

```typescript
// components/ui/form-field.tsx
interface FormFieldProps {
    label: string;
    field: any; // Conform field type
    type?: 'text' | 'email' | 'tel' | 'number';
}

export function FormField({ label, field, type = 'text' }: FormFieldProps) {
    return (
        <div className="space-y-1">
            <Label htmlFor={field.id}>{label}</Label>
            <Input
                {...getInputProps(field, { type })}
                className={cn('w-full', field.errors && 'border-red-500')}
            />
            <ErrorMessage>{field.errors}</ErrorMessage>
        </div>
    );
}
```

## Form Validation Best Practices

### 1. Client-Side Validation

```typescript
const [form, fields] = useForm({
    shouldValidate: 'onBlur', // Validate when field loses focus
    shouldRevalidate: 'onInput', // Re-validate as user types
    onValidate({ formData }) {
        return parseWithZod(formData, {
            schema: memberSchema,
        });
    },
});
```

### 2. Server-Side Validation

```typescript
export async function action({ request }: ActionArgs) {
    const formData = await request.formData();

    // Parse and validate
    const submission = parseWithZod(formData, {
        schema: memberSchema,
    });

    if (submission.status !== 'success') {
        return json(submission.reply());
    }

    // Additional business logic validation
    const existingMember = await db.member.findFirst({
        where: { phone: submission.value.phone },
    });

    if (existingMember) {
        return json(
            submission.reply({
                fieldErrors: {
                    phone: ['Phone number already registered'],
                },
            })
        );
    }

    // Proceed with save
}
```

### 3. Intent Handling

```typescript
export const memberSchema = z.object({
    // ... other fields
    intent: z.enum(['save', 'draft', 'delete']),
});

export async function action({ request }: ActionArgs) {
    const submission = parseWithZod(formData, {
        schema: memberSchema,
    });

    if (submission.value.intent === 'delete') {
        // Handle deletion
    }

    if (submission.value.intent === 'draft') {
        // Save as draft
    }

    // Default save
}
```

### 4. Form State Management

```typescript
export default function MemberForm() {
    const navigation = useNavigation();
    const isSubmitting = navigation.state === 'submitting';

    return (
        <Form {...form.props}>
            {/* Fields */}

            <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Saving...' : 'Save'}
            </Button>

            {form.errors && (
                <Alert variant="destructive">
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>{form.errors}</AlertDescription>
                </Alert>
            )}
        </Form>
    );
}
```
