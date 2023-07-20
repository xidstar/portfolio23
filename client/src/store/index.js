import { proxy } from "valtio";

const state = proxy({
  intro: true,
  isDarkMode: true,
  color: '#ff4d5a',
  isAbout: false,
  isProjects: false,
  isContact: false,
  showObject: true,
})

export default state;