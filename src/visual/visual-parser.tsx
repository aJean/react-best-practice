import React from 'react';
import { getRenderFactory } from './visual-dnd';

/**
 * @file 解析器
 */

export const toJson = (ast, data?) => {
  return ast.map((exp) => {
    const Tag = getRenderFactory(exp.factory);
    const props = exp.props || {};

    return { id: exp.id, Tag, props };
  });
};

export const toJsx = (ast, data?) => {
  return ast.map((exp) => {
    const Tag = getRenderFactory(exp.factory);
    const props = exp.props || {};

    return <Tag key={exp.id} {...props} />;
  });
};
