type VideoplayerProps = {
  previewVideoLink: string;
}

export default function Videoplayer({previewVideoLink} : VideoplayerProps) {
  return (<video width="280" height="175" autoPlay muted src={previewVideoLink}/>);
}
