import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';
import { Icon } from '@components/icons';

const StyledPublicationsSection = styled.section`
  max-width: 900px;

  .publications-list {
    padding: 0;
    margin: 0;
    list-style: none;
  }
`;

const StyledPublication = styled.li`
  position: relative;
  padding: 25px;
  border-radius: var(--border-radius);
  background-color: var(--light-navy);
  transition: var(--transition);
  margin-bottom: 20px;

  &:hover,
  &:focus-within {
    transform: translateY(-5px);
    box-shadow: 0 20px 30px -15px var(--navy-shadow);
  }

  .publication-venue {
    margin-bottom: 10px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
  }

  .publication-title {
    margin: 0 0 12px;
    color: var(--lightest-slate);
    font-size: var(--fz-xl);
    line-height: 1.3;

    a {
      position: static;

      &:before {
        content: '';
        display: block;
        position: absolute;
        z-index: 0;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
      }
    }
  }

  .publication-authors {
    margin: 0 0 12px;
    color: var(--light-slate);
    font-size: var(--fz-sm);
    line-height: 1.5;

    strong {
      color: var(--lightest-slate);
    }
  }

  .publication-meta {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 15px;
    color: var(--slate);
    font-family: var(--font-mono);
    font-size: var(--fz-xxs);

    svg {
      width: 18px;
      height: 18px;
    }
  }
`;

const publications = [
  {
    title:
      'Precision prediction of posttraumatic stress disorder symptom surges: A pilot study integrating real-time daily data with supervised learning',
    venue: 'Journal of Traumatic Stress',
    year: '2025',
    url: 'https://onlinelibrary.wiley.com/doi/10.1002/jts.70036',
    authors:
      'Davis, J. P., Prindle, J., Pedersen, E. R., Leightley, D., Dilkina, B., Dworkin, E., Saba, S. K., Thota, P., Nuthi, S., Prince, M. A., & Sedano, A.',
  },
  {
    title:
      'A remote measurement study of PTSD and cannabis use among veterans: Recruitment, retention, and data availability',
    venue: 'PLOS ONE, 20(9), e0332239',
    year: '2025',
    url: 'https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0332239',
    authors:
      'Leightley, D., Dilkina, B., Pedersen, E. R., Dworkin, E., Saba, S., Howe, E., Thota, P., Nuthi, S., Sedano, A., & Davis, J. P.',
  },
  {
    title: 'Intelligent Proctoring System',
    venue: 'ICT with Intelligent Applications, Springer Nature Singapore (pp. 247–258)',
    year: '2022',
    url: 'https://link.springer.com/chapter/10.1007/978-981-19-3571-8_25',
    authors: 'Sanjeev, M., Ifrah, M. K., Sriram, N., Priya, P., & Kavitha, C. R.',
  },
];

const Publications = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledPublicationsSection id="publications" ref={revealContainer}>
      <h2 className="numbered-heading">Publications</h2>

      <ul className="publications-list">
        {publications.map((pub, i) => (
          <StyledPublication key={i}>
            <p className="publication-venue">
              {pub.venue} · {pub.year}
            </p>

            <h3 className="publication-title">
              <a href={pub.url} target="_blank" rel="noreferrer">
                {pub.title}
              </a>
            </h3>

            <p
              className="publication-authors"
              dangerouslySetInnerHTML={{
                __html: pub.authors.replace(
                  /(Nuthi, S\.|Sriram, N\.)/,
                  '<strong>$1</strong>',
                ),
              }}
            />

            <div className="publication-meta">
              <Icon name="External" />
              <span>Read the paper</span>
            </div>
          </StyledPublication>
        ))}
      </ul>
    </StyledPublicationsSection>
  );
};

export default Publications;
