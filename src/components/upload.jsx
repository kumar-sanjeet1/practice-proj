import React from 'react';
import * as XLSX from 'xlsx';



export const UploadComponent = ({ uploadUsers }) => (
    <div className="upload-file">
        <input type="file" accept=".xlsx" name="xlsx" id="" onChange={
            (e)=> {
             handleUpload(e, uploadUsers);
            }
        }/>
    </div>
)

const handleUpload = (e, uploadUsers) => {
    e.preventDefault();

    var files = e.target.files, f = files[0];
    var reader = new FileReader();
    reader.onload = function (e) {
        var data = e.target.result;
        let readedData = XLSX.read(data, { type: 'binary' });
        const wsname = readedData.SheetNames[0];
        const ws = readedData.Sheets[wsname];

        /* Convert array to json*/
        let dataParse = XLSX.utils.sheet_to_json(ws, { header: 1 });
        let headers = dataParse[0];
        dataParse.shift();
        let formattedDate = dataParse.map((row, index) => {
            return {
                id: index,
                [headers[0]]: row[0],
                [headers[1]]: row[1],
                [headers[2]]: row[2],
                action: ''
            }
        });
        
        uploadUsers(formattedDate)
    };
    reader.readAsBinaryString(f)
}
 