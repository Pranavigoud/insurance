import { createFileRoute } from '@tanstack/react-router'
import Claims from '../pages/Claims'

export const Route = createFileRoute('/claims')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Claims/>
}
