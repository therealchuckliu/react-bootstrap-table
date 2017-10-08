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
    this.state = {
      stickyColumnShown: false
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions.bind(this));
    this.updateDimensions();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions.bind(this));
  }

  render() {
    return (
      <div>
        <BootstrapTable
          data={ products }
          pagination
          showStickyColumn={ this.state.stickyColumnShown }
          ref='bsTable'>
          <TableHeaderColumn width='200' dataField='name'>Product Name</TableHeaderColumn>
          <TableHeaderColumn width='200' dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
          <TableHeaderColumn width='200' dataField='id'>Product ID</TableHeaderColumn>
          <TableHeaderColumn width='200' dataField='price'>Product Price</TableHeaderColumn>
          <TableHeaderColumn width='200' dataField='price'>Product Price</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }

  updateDimensions() {
    if (window.screen.width <= 766) {
      const sizePerPage = this.refs.bsTable.getSizePerPage();
      if (!this.state.stickyColumnShown) {
        this.setState({
          stickyColumnShown: true
        });
        for (let i = 0; i < sizePerPage; i++) {
          this.refs.bsTable.setRowHeight(i, this.refs.bsTable.getRowHeight(i));
        }
      }
    } else {
      this.setState({
        stickyColumnShown: false
      });
    }
  }

  handleButtonClick() {
    // console.log(this.refs.bsTable.getRowHeight(1));
    this.refs.bsTable.setRowHeight(1, 70);
  }
}
