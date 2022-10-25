import { FC } from 'react';
import Text from 'layout/text';
import getIcon from 'helpers/getIcon';
import { FlexWrapper, Item, ItemWrapper, Row, Title, RowIcon } from './styled';

const Grid: FC = () => (
  <FlexWrapper>
    <ItemWrapper>
      <Item>
        <div>
          <Title>Tools</Title>
          <div>
            <Row>
              <RowIcon src={getIcon('webpack')} />
              <Text lineHeight="1.2em">Webpack</Text>
            </Row>
            <Row>
              <RowIcon src={getIcon('babel')} />
              <Text lineHeight="1.2em">Babel</Text>
            </Row>
            <Row>
              <RowIcon src={getIcon('rollup')} />
              <Text lineHeight="1.2em">Rollup</Text>
            </Row>
            <Row>
              <RowIcon src={getIcon('browserify')} />
              <Text lineHeight="1.2em">Browserify</Text>
            </Row>
            <Row>
              <RowIcon src={getIcon('jest')} />
              <Text lineHeight="1.2em">Jest</Text>
            </Row>
            <Row>
              <RowIcon src={getIcon('eslint')} />
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
              <RowIcon src={getIcon('javascript')} />
              <Text lineHeight="1.2em">Javascript</Text>
            </Row>
            <Row>
              <RowIcon src={getIcon('typescript')} />
              <Text lineHeight="1.2em">Typescript</Text>
            </Row>
            <Row>
              <RowIcon src={getIcon('php')} />
              <Text lineHeight="1.2em">PHP</Text>
            </Row>
            <Row>
              <RowIcon src={getIcon('html')} />
              <Text lineHeight="1.2em">HTML</Text>
            </Row>
            <Row>
              <RowIcon src={getIcon('css')} />
              <Text lineHeight="1.2em">CSS</Text>
            </Row>
            <Row>
              <RowIcon src={getIcon('sql')} />
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
              <RowIcon src={getIcon('react')} />
              <Text lineHeight="1.2em">React</Text>
            </Row>
            <Row>
              <RowIcon src={getIcon('redux')} />
              <Text lineHeight="1.2em">Redux</Text>
            </Row>
            <Row>
              <RowIcon src={getIcon('vue')} />
              <Text lineHeight="1.2em">Vue</Text>
            </Row>
            <Row>
              <RowIcon src={getIcon('pug')} />
              <Text lineHeight="1.2em">Pug</Text>
            </Row>
            <Row>
              <RowIcon src={getIcon('nextjs')} />
              <Text lineHeight="1.2em">NextJs</Text>
            </Row>
            <Row>
              <RowIcon src={getIcon('responsive')} />
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
              <RowIcon src={getIcon('node')} />
              <Text lineHeight="1.2em">NodeJs</Text>
            </Row>
            <Row>
              <RowIcon src={getIcon('express')} />
              <Text lineHeight="1.2em">Express</Text>
            </Row>
            <Row>
              <RowIcon src={getIcon('api')} />
              <Text lineHeight="1.2em">API Rest</Text>
            </Row>
            <Row>
              <RowIcon src={getIcon('graphql')} />
              <Text lineHeight="1.2em">GraphQL</Text>
            </Row>
            <Row>
              <RowIcon src={getIcon('jwt')} />
              <Text lineHeight="1.2em">Json Web Token</Text>
            </Row>
            <Row>
              <RowIcon src={getIcon('firebase')} />
              <Text lineHeight="1.2em">Firebase</Text>
            </Row>
            <Row>
              <RowIcon src={getIcon('wordpress')} />
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
              <RowIcon src={getIcon('git')} />
              <Text lineHeight="1.2em">Git and Github</Text>
            </Row>
            <Row>
              <RowIcon src={getIcon('photoshop')} />
              <Text lineHeight="1.2em">Adobe Photoshop</Text>
            </Row>
            <Row>
              <RowIcon src={getIcon('aftereffects')} />
              <Text lineHeight="1.2em">Adobe After Effects</Text>
            </Row>
            <Row>
              <RowIcon src={getIcon('xd')} />
              <Text lineHeight="1.2em">Adobe Experience Design</Text>
            </Row>
            <Row>
              <RowIcon src={getIcon('sonyvegas')} />
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
              <RowIcon src={getIcon('cmd')} />
              <Text lineHeight="1.2em">Terminal</Text>
            </Row>
            <Row>
              <RowIcon src={getIcon('electron')} />
              <Text lineHeight="1.2em">Elecron</Text>
            </Row>
            <Row>
              <RowIcon src={getIcon('seo')} />
              <Text lineHeight="1.2em">Search Engine Opimization</Text>
            </Row>
            <Row>
              <RowIcon src={getIcon('marketing')} />
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
              <RowIcon src={getIcon('language')} />
              <Text lineHeight="1.2em">Spanish (Native)</Text>
            </Row>
            <Row>
              <RowIcon src={getIcon('language')} />
              <Text lineHeight="1.2em">English</Text>
            </Row>
          </div>
        </div>
      </Item>
    </ItemWrapper>
  </FlexWrapper>
);

export default Grid;
