import React from 'react'
import {getAll} from "../api/equipment.js";
 
const Crud = () => {
    const [equipments, setEquipments] = React.useState ([]);
    React.useEffect(() => {
        getAll().then((data) => {
            setEquipments(data);
        })
    }, [])
 
    return (
        <table>
            <tbody>
                <tr>
                    <th>Номер</th>
                    <th>Название</th>
                    <th>Кличество</th>
                    <th>НомерКатегории</th>
                    <th></th>
                    <th></th>
                </tr>
                {
                    equipments.map((item, index) => (
                        <tr key={index}>
                        <td>{item.equipmentId}</td>
                        <td>{item.equipmentName}</td>
                        <td>{item.quantity}</td>
                        <td>{item.equipmentCategoryId}</td>
                        <td>
                            <button>
                                Изменить
                            </button>
                        </td>
                        <td>
                            <button>
                                Изменить
                            </button>
                        </td>
                    </tr>
                    ))
                }
            </tbody>
        </table>
    );
}
 
export default Crud