import MaterialTable from "material-table";
import {forwardRef, useEffect, useState} from "react";
import AddBox from "@mui/icons-material/AddBox";
import ArrowDownward from "@mui/icons-material/ArrowDownward";
import Check from "@mui/icons-material/Check";
import ChevronLeft from "@mui/icons-material/ChevronLeft";
import ChevronRight from "@mui/icons-material/ChevronRight";
import Clear from "@mui/icons-material/Clear";
import DeleteOutline from "@mui/icons-material/DeleteOutline";
import Edit from "@mui/icons-material/Edit";
import FilterList from "@mui/icons-material/FilterList";
import FirstPage from "@mui/icons-material/FirstPage";
import LastPage from "@mui/icons-material/LastPage";
import Remove from "@mui/icons-material/Remove";
import SaveAlt from "@mui/icons-material/SaveAlt";
import Search from "@mui/icons-material/Search";
import ViewColumn from "@mui/icons-material/ViewColumn";
import { ThemeProvider, createTheme } from "@mui/material";


const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => (
        <ChevronRight {...props} ref={ref} />
    )),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => (
        <ChevronLeft {...props} ref={ref} />
    )),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};

const Table = (props) => {
    const defaultMaterialTheme = createTheme();
    const [data, setData] = useState(props.data);

    useEffect(()=>{
        console.log(data)
    },[data])
    return (
        <ThemeProvider theme={defaultMaterialTheme}>

                    <MaterialTable
                        icons={tableIcons}
                        title={props.title}
                        columns={props.columns}
                        data={data}
                        options={{
                            detailPanelType: "single",
                            detailPanelColumnAlignment: "right",
                            paging: true,
                            pageSize: 10,
                            search: true,
                            toolbarButtonAlignment: "left",
                            actionsColumnIndex: -1,
                            addRowPosition: "last",
                          }}
                          detailPanelOptions={{
                            placement: "bottom",
                          }}

                        // options={{ cellStyle: { border: '1px solid #9A9A9AFF' } }}


                        // options={{
                        //     actionsColumnIndex: -1,
                        //     // searchFieldAlignment: "right",
                        //     pageSize: 10,
                        //     pageSizeOptions: [10, 15, 25, 50, 100],
                        // }}

                        // editable={{
                        //     // isEditable: rowData => rowData.name === 'a', // only name(a) rows would be editable
                        //     // isEditHidden: rowData => rowData.name === 'x',
                        //     // isDeletable: rowData => rowData.name === 'b', // only name(b) rows would be deletable,
                        //     // isDeleteHidden: rowData => rowData.name === 'y',
                        //     // onBulkUpdate: changes =>
                        //     //     new Promise((resolve, reject) => {
                        //     //         setTimeout(() => {
                        //     //             /* setData([...data, newData]); */
                        //     //
                        //     //             resolve();
                        //     //         }, 1000);
                        //     //     }),
                        //     onRowAddCancelled: rowData => console.log('Row adding cancelled'),
                        //     onRowUpdateCancelled: rowData => console.log('Row editing cancelled'),
                        //     // onRowAdd: newData =>
                        //     //     new Promise((resolve, reject) => {
                        //     //         setTimeout(() => {
                        //     //             /* setData([...data, newData]); */
                        //     //
                        //     //             resolve();
                        //     //         }, 1000);
                        //     //     }),
                        //     onRowUpdate: (newData, oldData) =>
                        //         new Promise((resolve, reject) => {
                        //             setTimeout(() => {
                        //                 const dataUpdate = [...data];
                        //                 const index = oldData.tableData.id;
                        //                 dataUpdate[index] = newData;
                        //                 setData([...dataUpdate]);
                        //
                        //                 resolve();
                        //             }, 500);
                        //         }),
                        //     onRowDelete: oldData =>
                        //         new Promise((resolve, reject) => {
                        //             setTimeout(() => {
                        //                 const dataDelete = [...data];
                        //                 const index = oldData.tableData.id;
                        //                 dataDelete.splice(index, 1);
                        //                 setData([...dataDelete]);
                        //
                        //                 resolve();
                        //             }, 1000);
                        //         })
                        // }}
                        {...props}
                    />


        </ThemeProvider>
    )
}

export default Table;