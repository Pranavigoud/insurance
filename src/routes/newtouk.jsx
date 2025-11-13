import { createFileRoute } from '@tanstack/react-router'
import NewtoUk from '../pages/NewtoUk'

export const Route = createFileRoute('/newtouk')({
  component: RouteComponent,
})

function RouteComponent() {
  return <NewtoUk/>
}
