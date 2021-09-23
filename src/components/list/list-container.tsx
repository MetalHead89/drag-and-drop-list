import { connect } from 'react-redux';
import { IDispatch, IState } from '../../ts/interfaces';
import List from './list';
import {
  changedOrderOfItemsCreator,
  itemIsDragCreator,
  itemIsReleasedCreator,
} from '../../ts/store/reducers/list-reducer';

const mapStateToProps = (state: IState) => {
  return { items: state.list.items };
};

const mapDispatchToProps = (dispatch: IDispatch) => {
  return {
    dragItem: (id: number) => {
      dispatch(itemIsDragCreator(id));
    },
    itemReleased: (id: number) => {
      dispatch(itemIsReleasedCreator(id));
    },
    itemChangedPosition: (targetId: number) => {
      dispatch(changedOrderOfItemsCreator(targetId));
    },
  };
};

const ListContainer = connect(mapStateToProps, mapDispatchToProps)(List);

export default ListContainer;
