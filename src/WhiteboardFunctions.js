const loadWhiteboard = () => {
  let resolver = null

  const onLoadPromise = new Promise((resolve) => {
    resolver = resolve
  })

  const script = document.createElement('script')
  script.src = 'https://www.whiteboard.team/dist/api.js'
  script.async = true
  script.onload = () => resolver()
  document.body.appendChild(script)
  return onLoadPromise
}

export const initWhiteboard = async (setWhiteboard, config) => {
  await loadWhiteboard()
  setWhiteboard(createWhiteboard(config))
}

const createWhiteboard = (config) => {
  return new window.api.WhiteboardTeam('#whiteboard-space', {
    clientId: config.client_id,
    boardCode: config.code
  })
}
