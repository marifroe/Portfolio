type GetUrlProps = {
  path: string
}

type YoutubeProps = {
  embedId: string
  width: number
  height: number
}

export const getImageUrl = (props: GetUrlProps) => {
  /*const path: string = `./assets/${props.path}`;*/
  return new URL(`./assets/${props.path}`, import.meta.url).href
}

export const YoutubeVideo = (props: YoutubeProps) => {
  return <div className="video-responsive">
    <iframe
      width={props.width}
      height={props.height}
      src={`https://www.youtube.com/embed/${props.embedId}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
}