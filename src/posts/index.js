import BookIcon from '@material-ui/icons/Book';
import PostCreate from './PostCreate';
import PostEdit from './PostEdit';
import PostList from './PostList';
import PostShow from './PostShow';
import EditGuesser from '../EditGuesser';

export default {
    list: PostList,
    create: PostCreate,
    edit: EditGuesser,
    show: PostShow,
    icon: BookIcon,
};
