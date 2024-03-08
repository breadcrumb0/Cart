
import JsonData from './Data.json'
const Home = () => {

  const DisplayData=JsonData.map(
    (info)=>{
        return(
            <tr>
                <td>{info.id}</td>
                <td>{info.name}</td>
                <td>{info.city}</td>
            </tr>
        )
        })
  return (
    <div>
    <table id="example" class="table table-striped">
        <thead>
            <tr>
            <th>Sr.NO</th>
            <th>Name</th>
            <th>City</th>
            </tr>
        </thead>
        <tbody>
            {DisplayData}
        </tbody>
    </table>
</div>
  )
}

export default Home