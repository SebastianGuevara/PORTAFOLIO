import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    projects: []
}

const projectSlice = createSlice({
    name: "project",
    initialState,
    reducers: {
        setProjects: (state, action) => {
            state.projects = action.payload;
        }
    }
})

export const { setProjects } = projectSlice.actions;
export const selectProjects = (state) => state.project.projects;
export default projectSlice.reducer;