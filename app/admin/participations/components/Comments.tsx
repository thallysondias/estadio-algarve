import { UserData } from "@/lib/interface";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
export default function Comments({ entityUsers }: { entityUsers: UserData[] }) {
  const usersWithComments = entityUsers.filter(
    (contact) => contact.extra?.find((extra) => extra.field_id === 5)?.value
  );

  return (
    <div className="grid gap-4 mt-12">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-2xl font-bold tracking-tight">Comentários</h2>
      </div>

      <div className="table-fixed-header">
        <Table className="rounded-md border">
          <TableHeader>
            <TableRow>
              <TableHead>Entidade</TableHead>
              <TableHead>Comentários</TableHead>
            </TableRow>
          </TableHeader>
        </Table>
        <div className="scrollable-tbody-container overflow-auto max-h-96">
          <Table className="rounded-md border">
            <TableBody className="text-sm">
              {usersWithComments.map((contact) => (
                <TableRow key={contact.base.contact_id}>
                  <TableCell>
                  {contact.extra?.[0].value}
                   
                  </TableCell>
                  <TableCell>
                    {
                      contact.extra?.find((extra) => extra.field_id === 5)
                        ?.value
                    }
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
