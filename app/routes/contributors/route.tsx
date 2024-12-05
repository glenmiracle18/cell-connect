import MainLayout from "@/components/layouts/MainLayout";
import * as React from "react";

import { Card } from "@/components/ui/card";
import { DemographicMap } from "@/components/atoms/role-demographics/demographic-map";

import { Button } from "@/components/ui/button";


import { Plus } from "lucide-react";

import { CrudList } from "@/components/blocks/crud-list";
import { TContributor, TPartialContributor } from "@/@types/contributors";
import { ContributorService } from "@/services/contributors/contributor-service";
import { useNavigate } from "@remix-run/react";
import { contributors } from "@/data/contributors/data";
import { ContributorSummaryCard } from "./components/contrib_blocks/contributor-summary-card";
import { columns } from "./components/columns";

// @Authorized(['admin'])
export default function Contributors() {
  // return (
  //   <MainLayout title="Contributors" action={<AddContributor />}>
  //     <div className="flex flex-col gap-4">
  //       <div className="flex gap-2 w-full">
  //         <ContributorSummaryCard />
  //       </div>
  //       <Card className="p-4">
  //         {/* table goes here */}
  //         {/* <TableRender searchParams={searchParams} /> */}
  //         <DataTable columns={columns} data={contributors} />
  //       </Card>
  //     </div>
  //   </MainLayout>
  // );
  
  const navigate = useNavigate();

  return (
    <MainLayout
      title="Contributors"
      action={
        <Button
          className="bg-teal-900"
          onClick={() => navigate("/contributors/create")}
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
          <CrudList<TPartialContributor, TContributor, ContributorService>
            columns={columns}
            data={contributors}
            baseRoute={"/contributors"}
          ></CrudList>
        </Card>
      </div>
    </MainLayout>
  );
}
