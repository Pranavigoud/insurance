import { createFileRoute } from '@tanstack/react-router'
import ReferAFriend from '../pages/ReferAFriend'

export const Route = createFileRoute('/referafriend')({
  component: RouteComponent,
})

function RouteComponent() {
  return <ReferAFriend/>
}
