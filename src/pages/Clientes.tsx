import React, { useEffect, useMemo, useState } from "react";
import { getAllClientes } from "../slices/clientesSlice";
import { Cliente } from "../utils/models";
import {
  MaterialReactTable,
  MRT_TableInstance,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from 'material-react-table';

const Clientes = () => {
  // const dispatch = useAppDispatch();
  const clienteInit: Cliente[] = [];
  const [data, setData] = useState(clienteInit);
  let table: MRT_TableInstance<Cliente>;

  const columns = useMemo<MRT_ColumnDef<Cliente>[]>(() => [
    {
      accessorKey: 'id',
      header: 'Id',
      size: 50,
    },
    {
      accessorKey: 'nombre',
      header: 'First Name',
      size: 150,
    },
    {
      accessorKey: 'apellido',
      header: 'Last Name',
      size: 150,
    },
    {
      accessorKey: 'tipo_doc',
      header: 'Type Doc',
      size: 150,
    },
    {
      accessorKey: 'nro_doc',
      header: 'Nro Doc',
      size: 150,
    },
    {
      accessorKey: 'nro_tel_princ',
      header: 'Nro Tel Princ',
      size: 150,
    },
    {
      accessorKey: 'nro_tel_sec',
      header: 'Nro Tel sec',
      size: 150,
    },
    {
      accessorKey: 'email',
      header: 'Email',
      size: 150,
    },
  ], []);

  const handleGetClientes = async () => {
    const response: Cliente[] = await getAllClientes();
    setData(response);
  }

  useEffect(()=> {
    handleGetClientes();
  }, [setData]);

  table = useMaterialReactTable({
    columns,
    data,
  });

  return (<MaterialReactTable table={table} />);
};

export default Clientes;
