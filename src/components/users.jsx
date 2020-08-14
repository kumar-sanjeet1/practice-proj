import React from 'react';
let selectedValues = [];



export const UsersComponent = ({users = []}) => (
    <div className="users">
        <div>
            <button onClick={handleApprove}>Approve</button>
        </div>
        <table>
            <thead>
               <tr>
                    <td>#</td>
                    <td>Mobile</td>
                    <td>ID</td>
                    <td>Earning;</td>
                    <td>Action</td>
               </tr>
            </thead>
            <tbody>
                {users.map(user => (
                    <User key={user.mobile} user={user} />
                ))}
            </tbody>
        </table>
    </div>
)
const handleApprove = (evt) => {
    
    console.log('Multiapproved', selectedValues);
}

export const User = ({user}) => (
    <tr className="">
        <td><input type="checkbox" value={user} onChange={(e)=> {
            setSelected(e, user)
        }}/></td>
        <td>{user.mobile}</td>
        <td> {user.id + 1}</td>
        <td>{user.earning}</td>
        <td><span onClick={() => handlerApprove(user)}>Approve</span> | <span onClick={() => handlerReject(user)}> Reject</span></td>
    </tr>
)
const setSelected = (evt, user) =>  {
    if (evt.target.checked) {
        selectedValues.push(user);
    }else {
        selectedValues = selectedValues.filter(el => el.id !== user.id)
    }
}

const handlerApprove = (user) => {
    user = {...user, action: 'approve'  }
    console.log('Approved User', user);
}

const handlerReject = (user) => {
    let remark = prompt('Enter remark')
    if (!remark) return;
    user = [{ ...user, action: 'reject', remark: remark }]
    console.log('Rejected User', user);
}