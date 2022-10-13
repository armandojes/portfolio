import React, { FC } from 'react';
import webpackSrc from 'assets/icons/webpack.png';
import rollupSrc from 'assets/icons/rollup.png';
import babelSrc from 'assets/icons/babel.png';
import browserifySrc from 'assets/icons/browserify.png';
import jestSrc from 'assets/icons/jest.png';
import eslintSrc from 'assets/icons/eslint.png';
import javascriptSrc from 'assets/icons/javascript.png';
import typescriptSrc from 'assets/icons/typescript.png';
import phpSrc from 'assets/icons/php.png';
import htmlSrc from 'assets/icons/html.png';
import cssSrc from 'assets/icons/css.png';
import sqlSrc from 'assets/icons/sql.png';
import reactSrc from 'assets/icons/react.png';
import reduxSrc from 'assets/icons/redux.png';
import vueSrc from 'assets/icons/vue.png';
import pugSrc from 'assets/icons/pug.png';
import nextjsSrc from 'assets/icons/nextjs.png';
import responsiveSrc from 'assets/icons/responsive.png';
import nodeSrc from 'assets/icons/node.png';
import apiSrc from 'assets/icons/api.png';
import graphqlSrc from 'assets/icons/graphql.png';
import jwtSrc from 'assets/icons/jwt.png';
import firebaseSrc from 'assets/icons/firebase.png';
import wordpressSrc from 'assets/icons/wordpress.png';
import gitSrc from 'assets/icons/git.png';
import photoshopSrc from 'assets/icons/photoshop.png';
import aftereffectsSrc from 'assets/icons/after_effects.png';
import xdSrc from 'assets/icons/xd.png';
import sonyvegasSrc from 'assets/icons/sony_vegas.png';
import cmdSrc from 'assets/icons/cmd.png';
import seoSrc from 'assets/icons/seo.png';
import marketingSrc from 'assets/icons/marketing.png';
import languageSrc from 'assets/icons/language.png';

import Text from 'layout/text';
import { FlexWrapper, Item, ItemWrapper, Row, Title, RowIcon } from './styled';

const Grid: FC = () => (
  <FlexWrapper>
    <ItemWrapper>
      <Item>
        <div>
          <Title>Tools</Title>
          <div>
            <Row>
              <RowIcon src={webpackSrc} />
              <Text lineHeight="1.2em">Webpack</Text>
            </Row>
            <Row>
              <RowIcon src={babelSrc} />
              <Text lineHeight="1.2em">Babel</Text>
            </Row>
            <Row>
              <RowIcon src={rollupSrc} />
              <Text lineHeight="1.2em">Rollup</Text>
            </Row>
            <Row>
              <RowIcon src={browserifySrc} />
              <Text lineHeight="1.2em">Browserify</Text>
            </Row>
            <Row>
              <RowIcon src={jestSrc} />
              <Text lineHeight="1.2em">Jest</Text>
            </Row>
            <Row>
              <RowIcon src={eslintSrc} />
              <Text lineHeight="1.2em">ESLint</Text>
            </Row>
          </div>
        </div>
      </Item>
    </ItemWrapper>
    <ItemWrapper>
      <Item>
        <div>
          <Title>Languages</Title>
          <div>
            <Row>
              <RowIcon src={javascriptSrc} />
              <Text lineHeight="1.2em">Javascript</Text>
            </Row>
            <Row>
              <RowIcon src={typescriptSrc} />
              <Text lineHeight="1.2em">Typescript</Text>
            </Row>
            <Row>
              <RowIcon src={phpSrc} />
              <Text lineHeight="1.2em">PHP</Text>
            </Row>
            <Row>
              <RowIcon src={htmlSrc} />
              <Text lineHeight="1.2em">HTML</Text>
            </Row>
            <Row>
              <RowIcon src={cssSrc} />
              <Text lineHeight="1.2em">CSS</Text>
            </Row>
            <Row>
              <RowIcon src={sqlSrc} />
              <Text lineHeight="1.2em">SQL</Text>
            </Row>
          </div>
        </div>
      </Item>
    </ItemWrapper>
    <ItemWrapper>
      <Item>
        <div>
          <Title>Frontend</Title>
          <div>
            <Row>
              <RowIcon src={reactSrc} />
              <Text lineHeight="1.2em">React</Text>
            </Row>
            <Row>
              <RowIcon src={reduxSrc} />
              <Text lineHeight="1.2em">Redux</Text>
            </Row>
            <Row>
              <RowIcon src={vueSrc} />
              <Text lineHeight="1.2em">Vue</Text>
            </Row>
            <Row>
              <RowIcon src={pugSrc} />
              <Text lineHeight="1.2em">Pug</Text>
            </Row>
            <Row>
              <RowIcon src={nextjsSrc} />
              <Text lineHeight="1.2em">NextJs</Text>
            </Row>
            <Row>
              <RowIcon src={responsiveSrc} />
              <Text lineHeight="1.2em">Responsive Design</Text>
            </Row>
          </div>
        </div>
      </Item>
    </ItemWrapper>
    <ItemWrapper>
      <Item>
        <div>
          <Title>Backend</Title>
          <div>
            <Row>
              <RowIcon src={nodeSrc} />
              <Text lineHeight="1.2em">NodeJs</Text>
            </Row>
            <Row>
              <RowIcon src={apiSrc} />
              <Text lineHeight="1.2em">API Rest</Text>
            </Row>
            <Row>
              <RowIcon src={graphqlSrc} />
              <Text lineHeight="1.2em">GraphQL</Text>
            </Row>
            <Row>
              <RowIcon src={jwtSrc} />
              <Text lineHeight="1.2em">Json Web Token</Text>
            </Row>
            <Row>
              <RowIcon src={firebaseSrc} />
              <Text lineHeight="1.2em">Firebase</Text>
            </Row>
            <Row>
              <RowIcon src={wordpressSrc} />
              <Text lineHeight="1.2em">Wordpress</Text>
            </Row>
          </div>
        </div>
      </Item>
    </ItemWrapper>
    <ItemWrapper>
      <Item>
        <div>
          <Title>Software</Title>
          <div>
            <Row>
              <RowIcon src={gitSrc} />
              <Text lineHeight="1.2em">Git and Github</Text>
            </Row>
            <Row>
              <RowIcon src={photoshopSrc} />
              <Text lineHeight="1.2em">Adobe Photoshop</Text>
            </Row>
            <Row>
              <RowIcon src={aftereffectsSrc} />
              <Text lineHeight="1.2em">Adobe After Effects</Text>
            </Row>
            <Row>
              <RowIcon src={xdSrc} />
              <Text lineHeight="1.2em">Adobe Experience Design</Text>
            </Row>
            <Row>
              <RowIcon src={sonyvegasSrc} />
              <Text lineHeight="1.2em">Sony Vegas</Text>
            </Row>
          </div>
        </div>
      </Item>
    </ItemWrapper>
    <ItemWrapper>
      <Item>
        <div>
          <Title>Others</Title>
          <div>
            <Row>
              <RowIcon src={cmdSrc} />
              <Text lineHeight="1.2em">Terminal</Text>
            </Row>
            <Row>
              <RowIcon src={seoSrc} />
              <Text lineHeight="1.2em">Search Engine Opimization</Text>
            </Row>
            <Row>
              <RowIcon src={marketingSrc} />
              <Text lineHeight="1.2em">Marketing</Text>
            </Row>
          </div>
        </div>
      </Item>
    </ItemWrapper>
    <ItemWrapper>
      <Item>
        <div>
          <Title>Language</Title>
          <div>
            <Row>
              <RowIcon src={languageSrc} />
              <Text lineHeight="1.2em">Spanish (Native)</Text>
            </Row>
            <Row>
              <RowIcon src={languageSrc} />
              <Text lineHeight="1.2em">English</Text>
            </Row>
          </div>
        </div>
      </Item>
    </ItemWrapper>
  </FlexWrapper>
);

export default Grid;
