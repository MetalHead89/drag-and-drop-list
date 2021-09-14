import { connect } from 'react-redux';
import { IState } from '../../ts/interfaces';
import List from './list';

const mapStateToProps = (state: IState) => {
  return { items: state.list.items };
};

const ListContainer = connect(mapStateToProps)(List);

export default ListContainer;
