export const ADD_TEAM_MEMBER = "ADD_TEAM_MEMBER";
export const REMOVE_TEAM_MEMBER = "REMOVE_TEAM_MEMBER";
export const FAVORITE_TEAM_MEMBER = "FAVORITE_TEAM_MEMBER";
export const SET_TEAM_MEMBERS = "SET_TEAM_MEMBERS";

const teamMembersReducer = (state = [], action) => {
    switch (action.type) {
        case SET_TEAM_MEMBERS:
            return action.payload;
        case ADD_TEAM_MEMBER:
            return [...state, action.teamMember];
        case REMOVE_TEAM_MEMBER:
            return state.filter((teamMember) => teamMember.id !== action.id);
        case FAVORITE_TEAM_MEMBER:
            return state.map((teamMember) =>
                teamMember.id === action.id
                    ? { ...teamMember, favorite: !teamMember.favorite }
                    : teamMember
            );
        default:
            return state;
    }
};

export default teamMembersReducer;
