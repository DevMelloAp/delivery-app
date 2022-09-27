import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import { removeProductsToLocal } from '../utils/cartLocalsotorage';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    textAlign: 'left',
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function TableCard(props) {
  const { name, price, quantity, id, index, product } = props;

  return (
    <StyledTableRow key={ index }>
      <StyledTableCell
        data-testid={
          `customer_checkout__element-order-table-item-number-${index}`
        }
        width="50px"
      >
        { id }

      </StyledTableCell>
      <StyledTableCell
        data-testid={ `customer_checkout__element-order-table-item-name-${index}` }
        width="1000px"
      >
        { name }

      </StyledTableCell>
      <StyledTableCell
        data-testid={
          `customer_checkout__element-order-table-item-quantity-${index}`
        }
        width="200px"
      >
        { quantity }

      </StyledTableCell>
      <StyledTableCell
        data-testid={
          `customer_checkout__element-order-table-item-unit-price-${index}`
        }
        width="200px"
      >
        { price }

      </StyledTableCell>
      <StyledTableCell
        data-testid={
          `customer_checkout__element-order-table-item-sub-total-${index}`
        }
        width="200px"
      >
        {(quantity * price).toFixed(2)}

      </StyledTableCell>
      <StyledTableCell>
        <Button
          type="submit"
          variant="contained"
          width="10px"
          color="primary"
          disableElevation
          data-testid={ `customer_checkout__element-order-table-remove-${index}` }
          onClick={ (e) => {
            (e.target.parentNode.parentNode.parentNode).remove();
            removeProductsToLocal(product);
          } }
        >
          Remover
        </Button>
      </StyledTableCell>
    </StyledTableRow>
  );
}

TableCard.propTypes = {
  name: PropTypes.node.isRequired,
  price: PropTypes.node.isRequired,
  quantity: PropTypes.node.isRequired,
  id: PropTypes.node.isRequired,
  index: PropTypes.node.isRequired,
  product: PropTypes.node.isRequired,
};

export default TableCard;
