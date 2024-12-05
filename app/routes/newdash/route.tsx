import { AppSidebar } from "@/components/app-sidebar";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import {
	getTheme,
	setTheme as setSystemTheme,
} from "@/components/theme-switcher";
import { useHydrated } from "remix-utils/use-hydrated";
import {
	SidebarInset,
	SidebarProvider,
	SidebarTrigger,
} from "@/components/ui/sidebar";
import { LaptopIcon, MoonIcon, SunIcon } from "lucide-react";
import { useState, useCallback } from "react";
import { ModeToggle } from "@/components/mode-toggle";

export default function Page() {
	const theme = getTheme();
	const [language, setLanguage] = useState<string>("🇺🇸 English");
	const hydrated = useHydrated();
	const [, rerender] = useState({});
	const setTheme = useCallback((theme: string) => {
		setSystemTheme(theme);
		rerender({});
	}, []);

	return (
		<SidebarProvider>
			<AppSidebar />
			<SidebarInset>
				<header className="flex h-16 shrink-0 items-center gap-2 w-full justify-between">
					<div className="flex items-center gap-2 px-4">
						<SidebarTrigger className="-ml-1" />
						<Separator orientation="vertical" className="mr-2 h-4" />
						<Breadcrumb>
							<BreadcrumbList>
								<BreadcrumbItem className="hidden md:block">
									<BreadcrumbLink href="#">
										Building Your Application
									</BreadcrumbLink>
								</BreadcrumbItem>
								<BreadcrumbSeparator className="hidden md:block" />
								<BreadcrumbItem>
									<BreadcrumbPage>Data Fetching</BreadcrumbPage>
								</BreadcrumbItem>
							</BreadcrumbList>
						</Breadcrumb>
					</div>
					<div className="px-6">
						{/* theme toggler */}
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button
									className="w-10 h-10 rounded-full border"
									size="icon"
									variant="ghost"
								>
									<span className="sr-only">Theme selector</span>
									{!hydrated ? null : theme === "dark" ? (
										<MoonIcon className="size-4" />
									) : theme === "light" ? (
										<SunIcon className="size-4" />
									) : (
										<LaptopIcon className="icon_size" />
									)}
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent
								className="mt-2 text-sm shadow-sm m-4"
								side="bottom"
								sideOffset={1.5}
							>
								<DropdownMenuLabel className="text-sm">Theme</DropdownMenuLabel>
								<DropdownMenuSeparator />
								<DropdownMenuItem asChild className="flex items-center gap-2">
									<button
										type="button"
										className="w-full text-sm"
										onClick={() => setTheme("light")}
										aria-selected={theme === "light"}
									>
										<SunIcon className="icon_size" />
										Light
									</button>
								</DropdownMenuItem>
								<DropdownMenuItem asChild className="flex items-center gap-2">
									<button
										type="button"
										className="w-full"
										onClick={() => setTheme("dark")}
										aria-selected={theme === "dark"}
									>
										<MoonIcon className="icon_size" />
										Dark
									</button>
								</DropdownMenuItem>
								<DropdownMenuItem asChild className="flex items-center gap-2">
									<button
										type="button"
										className="w-full text-sm"
										onClick={() => setTheme("system")}
										aria-selected={theme === "system"}
									>
										<LaptopIcon className="icon_size" />
										System
									</button>
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					</div>
				</header>
				<div className="flex flex-1 flex-col gap-4 p-4 pt-0">
					<div className="grid auto-rows-min gap-4 md:grid-cols-3">
						<div className="aspect-video rounded-xl bg-muted/50" />
						<div className="aspect-video rounded-xl bg-muted/50" />
						<div className="aspect-video rounded-xl bg-muted/50" />
					</div>
					<div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
				</div>

				{/* from remix themes */}
                <ModeToggle />
			</SidebarInset>
		</SidebarProvider>
	);
}
