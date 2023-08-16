import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Overview from "./overview/page";

export default function Home() {
  return (
    <div className="w-full h-screen overflow-hidden bg-zinc-800 max-w-1920 justify-center md:flex">
      <div className="flex-1 space-y-8 p-8 pt-6 overflow-hidden">
        <div className="flex items-center justify-between space-y-2">
          <h1 className="text-5xl font-bold tracking-tight text-white">
            Painel
          </h1>
        </div>
        <Tabs defaultValue="overview" className="h-[91%] overflow-hidden">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="pt-8 h-full">
            <Overview />
          </TabsContent>
          <TabsContent value="analytics">analytics</TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
