import webpack from 'assets/icons/webpack.png';
import rollup from 'assets/icons/rollup.png';
import babel from 'assets/icons/babel.png';
import browserify from 'assets/icons/browserify.png';
import jest from 'assets/icons/jest.png';
import eslint from 'assets/icons/eslint.png';
import javascript from 'assets/icons/javascript.png';
import typescript from 'assets/icons/typescript.png';
import php from 'assets/icons/php.png';
import html from 'assets/icons/html.png';
import css from 'assets/icons/css.png';
import sql from 'assets/icons/sql.png';
import react from 'assets/icons/react.png';
import reactRouter from 'assets/icons/react_router.png';
import redux from 'assets/icons/redux.png';
import vue from 'assets/icons/vue.png';
import pug from 'assets/icons/pug.png';
import nextjs from 'assets/icons/nextjs.png';
import responsive from 'assets/icons/responsive.png';
import node from 'assets/icons/node.png';
import api from 'assets/icons/api.png';
import graphql from 'assets/icons/graphql.png';
import jwt from 'assets/icons/jwt.png';
import firebase from 'assets/icons/firebase.png';
import wordpress from 'assets/icons/wordpress.png';
import git from 'assets/icons/git.png';
import photoshop from 'assets/icons/photoshop.png';
import aftereffects from 'assets/icons/after_effects.png';
import xd from 'assets/icons/xd.png';
import sonyvegas from 'assets/icons/sony_vegas.png';
import cmd from 'assets/icons/cmd.png';
import seo from 'assets/icons/seo.png';
import marketing from 'assets/icons/marketing.png';
import language from 'assets/icons/language.png';
import json from 'assets/icons/json.png';
import materialUi from 'assets/icons/materialui.png';
import express from 'assets/icons/express.png';
import electron from 'assets/icons/electron.png';
import openpay from 'assets/icons/openpay.png';
import styledComponents from 'assets/icons/styled_components.png';

const icons = {
  styledComponents,
  openpay,
  electron,
  express,
  materialUi,
  webpack,
  rollup,
  babel,
  browserify,
  jest,
  eslint,
  javascript,
  typescript,
  php,
  html,
  css,
  sql,
  react,
  reactRouter,
  redux,
  vue,
  pug,
  nextjs,
  responsive,
  node,
  api,
  graphql,
  jwt,
  firebase,
  wordpress,
  git,
  photoshop,
  aftereffects,
  xd,
  sonyvegas,
  cmd,
  seo,
  marketing,
  language,
  json,
};

type Names = keyof typeof icons;

const getIcon = (name: Names) => icons[name];

export default getIcon;
