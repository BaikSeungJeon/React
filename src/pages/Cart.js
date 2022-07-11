import React from 'react'
import { Table } from 'react-bootstrap'

export default function Cart() {
  return (
    <div>
        <Table>
            <thead>
                <tr>
                    <th>No</th>
                    <th>상품명</th>
                    <th>수량</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>iPhone</td>
                    <td>1</td>
                </tr>
            </tbody>
        </Table> 
    </div>
  )
}
