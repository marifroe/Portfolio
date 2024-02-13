type GreetProps = {
  name: string
  messageCount?: number
  isLoggedIn: boolean
}

export const Intro = (props: GreetProps) => {
  const { messageCount = 0 } = props
  return (
    <div>
      <h2>
        {
          props.isLoggedIn
            ? `Welcome ${props.name}! You have ${messageCount} new messages.`
            : 'Welcome Guest!' 
        }
      </h2>
    </div>
  )
}