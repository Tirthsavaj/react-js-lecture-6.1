const Record = ({record}) => {
    return(
        <table border={1}>
            <thead>
                <tr>
                    <td>grid</td>
                    <td>name</td>
                    <td>email</td>
                    <td>password</td>
                    <td>course</td>
                    <td>city</td>
                </tr>
            </thead>
            {
                record.map((val)=>{
                        return(
                    <tbody>
                            <tr>
                            <td>{val.grid}</td>
                            <td>{val.name}</td>
                            <td>{val.email}</td>
                            <td>{val.password}</td>
                            <td>{val.course}</td>
                            <td>{val.city}</td>
                        </tr>
                    </tbody>
                        )
                })
            }
        </table>
    )
}

export default Record;