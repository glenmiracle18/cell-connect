import MainLayout from '@/components/layouts/MainLayout';

import { Button } from '@/components/ui/button';

import { Card } from '@/components/ui/card';
import { Plus } from 'lucide-react';

import { columns } from './components/columns';
import { CrudList } from '@/components/blocks/crud-list';
import { TContributor, TPartialContributor } from '@/@types/contributors';
import { ContributorService } from '@/services/contributors/contributor-service';
import { Await, useLoaderData, useNavigate } from '@remix-run/react';
import { ContributorSummaryCard } from './components/contributor-summary-card';
import { defer } from '@remix-run/node';
import { Suspense } from 'react';

export async function loader() {
    const contributorService = new ContributorService();
    const contributorsPromise = contributorService.getAll();
    return defer({ contributorsPromise });
}

// @Authorized(['admin'])
export default function Contributors() {
    const navigate = useNavigate();
    const { contributorsPromise } = useLoaderData<typeof loader>();

    return (
        <MainLayout
            title="Contributors"
            action={
                <Button
                    className="bg-teal-900 dark:text-white text-white"
                    onClick={() => navigate('/contributors/create')}
                >
                    <Plus /> Add Contributor
                </Button>
            }
        >
            <div className="flex flex-col gap-4">
                <div className="flex gap-2 w-full">
                    <ContributorSummaryCard />
                </div>
                {/* TODO: Add a proper skeleton */}
                <Suspense fallback={<div>Loading</div>}>
                    <Await resolve={contributorsPromise}>
                        {(contributors) => (
                            <Card className="p-4">
                                <CrudList<
                                    TPartialContributor,
                                    TContributor,
                                    TContributor,
                                    ContributorService
                                >
                                    columns={columns}
                                    data={
                                        contributors as unknown as TPartialContributor[]
                                    }
                                    baseRoute={'/contributors'}
                                    title="Contributors"
                                ></CrudList>
                            </Card>
                        )}
                    </Await>
                </Suspense>
            </div>
        </MainLayout>
    );
}
