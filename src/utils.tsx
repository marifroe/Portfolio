type GetUrlProps = {
  path: string
}

export const getImageUrl = (props: GetUrlProps) => {
  /*const path: string = `./assets/${props.path}`;*/
  return new URL(`./assets/${props.path}`, import.meta.url).href
}