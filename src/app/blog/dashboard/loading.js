export default function Loading() {
  // Add fallback UI that will be shown while the route is loading.
  return (
    <div style={{padding: 24}}>
      <div style={{width: '40%', height: 32, background: '#eee', borderRadius: 6, marginBottom: 12}} />
      <div style={{width: '100%', height: 12, background: '#f2f2f2', borderRadius: 6, marginBottom: 8}} />
      <div style={{width: '90%', height: 12, background: '#f2f2f2', borderRadius: 6}} />
    </div>
  )
}