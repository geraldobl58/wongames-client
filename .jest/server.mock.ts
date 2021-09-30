import { server } from '../src/utils/mockServer/server'

beforeAll(() => {
  server.listen()
})

afterEach(() => {
  server.restoreHandlers()
})

afterAll(() => {
  server.close()
})
