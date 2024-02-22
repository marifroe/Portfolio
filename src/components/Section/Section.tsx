import { getImageUrl, YoutubeVideo } from "../../utils"
import styles from "./Section.module.css"

type SectionProps = {
  sectionType?: "title" | "textonly" | "text+media"
  title: string
  text: string
  mediaSrc: string
  mediaType: "img" | "vid" | "none"
  layout: 1 | 2 | 3
}

function getMediaComponent(mediaSrc: string, mediaType: "img" | "vid") {
  switch (mediaType) {
    case "img":
      return <img src={getImageUrl({ path: mediaSrc })} alt={`Preview Image for ${mediaSrc}`} className={styles.sectionImage} />
    case "vid":
      return <YoutubeVideo embedId={mediaSrc} width={853} height={480} style={styles.sectionVideo} />
    default: break;
  }
}

function getLayout(props: SectionProps) {
  switch (props.layout) {
    case 1:
      break;
    case 2:
      break;
    default:
      break;
  }
}

export const Section = (props: SectionProps) => {
  let sectionLayout
    switch (props.layout) {
      case 1:
        sectionLayout = styles.layout1
        break
      case 2:
        sectionLayout = styles.layout2 
        break
      case 3: 
        sectionLayout = styles.layout3 
        break
      default:
        sectionLayout = styles.layout1 
        break
      }

              /*return (
                <div key={section.title} className={styles.sectionContainer}>
                  <div className={sectionLayout}>
                    {
                      (section.mediaType == "img")
                      ?<img src={getImageUrl({ path: section.mediaSrc })} alt={`Preview Image for ${section.title}`} className={styles.sectionImage} />
                        : <YoutubeVideo embedId={section.mediaSrc} width={853} height={480} style={styles.sectionVideo} />
                    }
                    <div className={styles.sectionText}>
                      <h2 className={styles.sectionTitle}>{section.title}</h2>
                        {section.text}
                    </div>
                  </div>
                </div>
              )
            }*/


  return (
    <div className={styles.container}>
      <div className={sectionLayout}>
        {
          (props.mediaType == "img")
            ? <img src={getImageUrl({ path: props.mediaSrc })} alt={`Preview Image for ${props.title}`} className={styles.sectionImage} />
            : (props.mediaType == "vid") && <YoutubeVideo embedId={props.mediaSrc} width={853} height={480} style={styles.sectionVideo} />
        }
        <div className={styles.sectionText}>
          <h2 className={styles.sectionTitle}>{props.title}</h2>
          <p>{props.text}</p>
        </div>
      </div>
    </div>
  )
}

/*export const SectionLayout1 = (props: SectionProps) => {
  return (
    <div key={props.title} className={styles.sectionContainer}>
      <h2 className={styles.sectionTitle}>{props.title}</h2>
      <div className={styles.sectionContent}>
        {getMediaComponent(props.mediaSrc, props.mediaType)}
      </div>
    </div>
  )
}*/