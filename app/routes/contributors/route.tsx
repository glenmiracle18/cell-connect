<<<<<<< HEAD
import MainLayout from "@/components/layouts/MainLayout";
import * as React from "react";

import { Card } from "@/components/ui/card";
import { DemographicMap } from "@/components/atoms/role-demographics/demographic-map";
import { ContributorSummaryCard } from "@/components/atoms/contributors/contributor-summary-card";
import { columns } from "@/components/contributions/columns";
import { DataTable } from "@/components/contributions/data-table";
import { contributors } from "@/components/contributions/data";
import { AddContributor } from "@/components/atoms/contributors/Create-Contributors/components/new-user";
=======
import MainLayout from '@/components/layouts/MainLayout';

import { Button } from '@/components/ui/button';

import { ContributorSummaryCard } from '@/components/atoms/contributors/contributor-summary-card';

import { Card } from '@/components/ui/card';
import { Plus } from 'lucide-react';

import { columns } from './components/columns';
import { contributors } from '@/data/contributors/data';
import { CrudList } from '@/components/blocks/crud-list';
import { TContributor, TPartialContributor } from '@/@types/contributors';
import { ContributorService } from '@/services/contributors/contributor-service';
import { useNavigate } from '@remix-run/react';
>>>>>>> upstream/develop

// @Authorized(['admin'])
export default function Contributors() {
<<<<<<< HEAD
  return (
    <MainLayout title="Contributors" action={<AddContributor />}>
      <div className="flex flex-col gap-4">
        <div className="flex gap-2 w-full">
          <ContributorSummaryCard />
        </div>
        <Card className="p-4">
          {/* table goes here */}
          {/* <TableRender searchParams={searchParams} /> */}
          <DataTable columns={columns} data={contributors} />
        </Card>
      </div>
    </MainLayout>
  );
=======
    const navigate = useNavigate();

    return (
        <MainLayout
            title="Contributors"
            action={
                <Button
                    className="bg-teal-900"
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
                <Card className="p-4">
                    <CrudList<
                        TPartialContributor,
                        TContributor,
                        ContributorService
                    >
                        columns={columns}
                        data={contributors}
                        baseRoute={'/contributors'}
                    ></CrudList>
                </Card>
            </div>
        </MainLayout>
    );
>>>>>>> upstream/develop
}
