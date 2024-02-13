type StatusProps = {
  state: 'loading' | 'success' | 'error'
}

export const Status = (props: StatusProps) => {
  let message
  if (props.state === 'loading') {
    message = 'Loading'
  } else if (props.state === 'success') {
    message = 'Data fetched successfully!'
  } else if (props.state === 'error') {
    message = 'Error fetching data!'
  }

  return(
    <div>
      <h2>Status: {message}</h2>
    </div>
  )
}