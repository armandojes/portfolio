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
              <Text>Webpack</Text>
            </Row>
            <Row>
              <RowIcon src={babelSrc} />
              <Text>Babel</Text>
            </Row>
            <Row>
              <RowIcon src={rollupSrc} />
              <Text>Rollup</Text>
            </Row>
            <Row>
              <RowIcon src={browserifySrc} />
              <Text>Browserify</Text>
            </Row>
            <Row>
              <RowIcon src={jestSrc} />
              <Text>Jest</Text>
            </Row>
            <Row>
              <RowIcon src={eslintSrc} />
              <Text>ESLint</Text>
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
              <Text>Javascript</Text>
            </Row>
            <Row>
              <RowIcon src={typescriptSrc} />
              <Text>Typescript</Text>
            </Row>
            <Row>
              <RowIcon src={phpSrc} />
              <Text>PHP</Text>
            </Row>
            <Row>
              <RowIcon src={htmlSrc} />
              <Text>HTML</Text>
            </Row>
            <Row>
              <RowIcon src={cssSrc} />
              <Text>CSS</Text>
            </Row>
            <Row>
              <RowIcon src={sqlSrc} />
              <Text>SQL</Text>
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
              <Text>React</Text>
            </Row>
            <Row>
              <RowIcon src={reduxSrc} />
              <Text>Redux</Text>
            </Row>
            <Row>
              <RowIcon src={vueSrc} />
              <Text>Vue</Text>
            </Row>
            <Row>
              <RowIcon src={pugSrc} />
              <Text>Pug</Text>
            </Row>
            <Row>
              <RowIcon src={nextjsSrc} />
              <Text>NextJs</Text>
            </Row>
            <Row>
              <RowIcon src={responsiveSrc} />
              <Text>Responsive Design</Text>
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
              <Text>NodeJs</Text>
            </Row>
            <Row>
              <RowIcon src={apiSrc} />
              <Text>API Rest</Text>
            </Row>
            <Row>
              <RowIcon src={graphqlSrc} />
              <Text>GraphQL</Text>
            </Row>
            <Row>
              <RowIcon src={jwtSrc} />
              <Text>Json Web Token</Text>
            </Row>
            <Row>
              <RowIcon src={firebaseSrc} />
              <Text>Firebase</Text>
            </Row>
            <Row>
              <RowIcon src={wordpressSrc} />
              <Text>Wordpress</Text>
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
              <Text>Git and Github</Text>
            </Row>
            <Row>
              <RowIcon src={photoshopSrc} />
              <Text>Adobe Photoshop</Text>
            </Row>
            <Row>
              <RowIcon src={aftereffectsSrc} />
              <Text>Adobe After Effects</Text>
            </Row>
            <Row>
              <RowIcon src={xdSrc} />
              <Text>Adobe Experience Design</Text>
            </Row>
            <Row>
              <RowIcon src={sonyvegasSrc} />
              <Text>Sony Vegas</Text>
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
              <Text>Terminal</Text>
            </Row>
            <Row>
              <RowIcon src={seoSrc} />
              <Text>Search Engine Opimization</Text>
            </Row>
            <Row>
              <RowIcon src={marketingSrc} />
              <Text>Marketing</Text>
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
              <Text>Spanish (Native)</Text>
            </Row>
            <Row>
              <RowIcon src={languageSrc} />
              <Text>English</Text>
            </Row>
          </div>
        </div>
      </Item>
    </ItemWrapper>
  </FlexWrapper>
);

export default Grid;
