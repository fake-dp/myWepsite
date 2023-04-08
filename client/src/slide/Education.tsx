import * as S from "../style/CommonLayout";
import * as E from "../style/EducationStyled";
import { EducationInfo } from "../infoData/InfoMyData";

const Education = () => {
  return (
    <S.SlideLayoutWrapper id="education">
      <S.BackgroundWrapper props={"#444654"}>
        <S.PaddingWrapper>
          <S.Title>Education</S.Title>
          <E.DescriptionText>
            <p>
              코딩 전문 교육기관 코드스테이츠에서 프론트엔드 개발자로서의 기초를
              다졌습니다.
              <br />
              뿐만 아니라 각종 온라인 이나 코딩 커뮤니티를 통해 다양한 기술을
              학습하고 있습니다.
            </p>
          </E.DescriptionText>
          {EducationInfo.map((info) => (
            <E.ContentsWrapper key={info.id}>
              <h4>{info.title}</h4>
              <span>{info.date}</span>
              <ul>
                <E.SubTitleP>학습 내용</E.SubTitleP>
                {info.description.map((desc) => (
                  <li key={desc}>{desc}</li>
                ))}
              </ul>
              <E.SubTitleP>링크</E.SubTitleP>
              {info.link.map((link, idx) => (
                <a key={idx} href={link} target="_blank" rel="noreferrer">
                  {link}
                </a>
              ))}
            </E.ContentsWrapper>
          ))}
        </S.PaddingWrapper>
      </S.BackgroundWrapper>
    </S.SlideLayoutWrapper>
  );
};

export default Education;
