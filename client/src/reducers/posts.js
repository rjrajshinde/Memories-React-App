import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  // LIKE,
} from "../constants/actionTypes";

export default (posts = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload; //is the actual data from reducers
    case CREATE:
      return [...posts, action.payload]; //send over the array of all post with add a new post
    case UPDATE:
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      ); //send over the array of all post with add a new post
    case DELETE:
      return posts.filter((post) => post._id !== action.payload);
    // case LIKE:
    //   return posts.map((post) =>
    //     post._id === action.payload._id ? action.payload : post
    //   );
    default:
      return posts;
  }
};
