const initialUser = [
    {
      id: 1,
      name: "Tigran",
      lastName: "Harutyunyan",
      isEditMode: false
    },
    { id: 2, 
      name: "Koryun",
      lastName: "Avetisyan",
      isEditMode: false
    },
    {
      id: 3,
      name: "Arman",
      lastName: "Dashyan",
      isEditMode: false
    },
  ];

export const EDIT_MODE = 'EDIT_MODE';


export function userReducer (users = initialUser, action) {
    
    if(action.type === EDIT_MODE) {

        return users.map( user => {
            if(user.id === action.payload.id) {
                return {
                    ...user, isEditMode: true
                }
            } else {
                return {
                    ...user, isEditMode: false
                }
            }
        })
    }
    return  users
}