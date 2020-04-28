import React, { ReactText, useEffect, useState } from 'react';
import { Avatar, Tree } from 'antd';
import { CaretDownFilled } from '@ant-design/icons';
import styles from './style.less';

const { TreeNode } = Tree;

export interface StyleTreeProps {
  onSelect?: (selectedKeys: ReactText[]) => void;
  selectedKeys?: string[];
  styleMap?: object;
  treeData: any[];
  expandAll?: boolean;
  collapseAll?: boolean;
}

const StyleTree: React.FC<StyleTreeProps> = props => {
  const { treeData = [], onSelect, selectedKeys = [], styleMap = {}, expandAll, collapseAll } = props;
  const [rowExpanded, setRowExpanded] = useState(['']);

  const treeNodes = (org: any[]) => org.map((item: any) => (
    <TreeNode
      key={item.key}
      title={
        <>
          <Avatar
            style={{ backgroundColor: styleMap[item.type] }}
            className={styles.typeDot}
          /> {item.title}
        </>
      }
    >
      {item.children ? treeNodes(item.children) : null}
    </TreeNode>
  ));

  const handleExpand = () => {
    setRowExpanded(() => {
      const keys: string[] = [];
      JSON.stringify(treeData, (key, value) => {
        if (key === 'key') keys.push(value);
        return value;
      });
      return keys;
    });
  };

  const handleCollapse = () => {
    setRowExpanded(['']);
  };

  useEffect(() => {
    if (expandAll) handleExpand();
    if (collapseAll) handleCollapse();
  }, [expandAll, collapseAll, treeData]);

  return (
    <Tree
      showLine
      onSelect={onSelect}
      expandedKeys={rowExpanded}
      selectedKeys={selectedKeys}
      className={styles.styleTree}
      switcherIcon={<CaretDownFilled className={styles.switcherIcon} />}
      onExpand={(_, { expanded, node }) => {
        if (expanded) {
          setRowExpanded([...rowExpanded, (node.key as string)]);
        } else {
          setRowExpanded(rowExpanded.filter(rowKey => rowKey !== (node.key as string)));
        }
      }}
    >
      {treeNodes(treeData)}
    </Tree>
  );
};

// export default StyleTree;
const TreeConstruct = ({ ...props }) => {
  return <div className={styles.wrapper}>感觉整个世界都绿了</div>
}
export default TreeConstruct;
