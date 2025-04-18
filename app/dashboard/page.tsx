import { Button } from "@/components/ui/button";
import Link from "next/link";



export default function DashboardPage() {
    return (
        <div className="grid items-start gap-y-8">
      <div className="flex items-center justify-between px-2">
        <div className="grid gap-1">
          <h1 className="text-3xl md:text-4xl">Your Notes</h1>
          <p className="text-lg text-muted-foreground">
            Here you can see and create new notes
          </p>
        </div>

       
          <Button asChild>
            <Link href="/dashboard/new">Create a new Note</Link>
          </Button>
        
          </div>
      </div>
    );
}