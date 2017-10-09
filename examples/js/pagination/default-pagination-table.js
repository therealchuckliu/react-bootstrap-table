/* eslint max-len: 0 */
import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';


const products = [];

function addProducts(quantity) {
  const startId = products.length;
  for (let i = 0; i < quantity; i++) {
    const id = startId + i;
    products.push({
      id: id,
      name: 'Item name ' + id,
      price: 2100 + i
    });
  }
}

addProducts(70);

export default class DefaultPaginationTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <BootstrapTable
          data={ products }
          pagination
          showStickyColumn
          ref='bsTable'>
          <TableHeaderColumn width='200' row='0' rowSpan='2' dataField='name'>Product Name</TableHeaderColumn>
          <TableHeaderColumn width='200' row='0' rowSpan='2' dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
          <TableHeaderColumn width='200' row='0' rowSpan='2' dataField='id'>Product ID</TableHeaderColumn>
          <TableHeaderColumn width='200' row='0'>Product</TableHeaderColumn>
          <TableHeaderColumn width='200' row='1' dataField='price'>Price</TableHeaderColumn>
          <TableHeaderColumn width='200' row='1' dataField='price'>Price</TableHeaderColumn>
          <TableHeaderColumn width='200' row='1' dataField='price'>Price</TableHeaderColumn>
          <TableHeaderColumn width='200' row='1' dataField='price'>Price</TableHeaderColumn>
          <TableHeaderColumn width='200' row='1' dataField='price'>Price</TableHeaderColumn>
          <TableHeaderColumn width='200' row='1' dataField='price'>Price</TableHeaderColumn>
          <TableHeaderColumn width='200' row='1' dataField='price'>Price</TableHeaderColumn>
          <TableHeaderColumn width='200' row='1' dataField='price'>Price</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }

  handleButtonClick() {
    // console.log(this.refs.bsTable.getRowHeight(1));
    this.refs.bsTable.setRowHeight(1, 70);
  }
}
