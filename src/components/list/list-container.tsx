import { connect } from 'react-redux';
import { IState } from '../../ts/interfaces';
import List from './list';

const mapStateToProps = (state: IState) => {
  return { list: state.list };
};

const ListContainer = connect(mapStateToProps, null)(List);

export default ListContainer;
