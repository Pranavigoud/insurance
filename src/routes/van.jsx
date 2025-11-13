import { createFileRoute } from '@tanstack/react-router'
import Van from '../pages/Van'

export const Route = createFileRoute('/van')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Van/>
}
