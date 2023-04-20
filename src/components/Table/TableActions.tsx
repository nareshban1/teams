import React from "react";
import { ActionIconContainer, TableActionContainer } from "./Table.styles";
import { FaEye, FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

interface ITableActionProps {
  handleView?: () => void;
  handleEdit?: () => void;
  handleDelete?: () => void;
}

const TableActions = (props: ITableActionProps) => {
  const { handleDelete, handleEdit, handleView } = props;
  return (
    <TableActionContainer>
      {handleView && (
        <ActionIconContainer
          background="#20BC081A"
          color="#20BC08"
          border="#20BC081A"
          onClick={handleView}
        >
          <FaEye size={16} />
        </ActionIconContainer>
      )}
      {handleEdit && (
        <ActionIconContainer
          background="#1E83F71A"
          color="#1E83F7"
          border="#1E83F733"
          onClick={handleEdit}
        >
          <FaPen size={16} />
        </ActionIconContainer>
      )}
      {handleDelete && (
        <ActionIconContainer
          background="#F71E1E1A"
          color="#F71E1E"
          border="#F71E1E1A"
          onClick={handleDelete}
        >
          <MdDelete size={20} />
        </ActionIconContainer>
      )}
    </TableActionContainer>
  );
};

export default TableActions;
