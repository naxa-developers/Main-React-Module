/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';

export function TableHeader({
  dataField,
  dataFormat,
  isSubHeader,
  dataHeader,
  rowcolSpan,
  headerClassName,
  containSubHeader,
}) {
  return (
    <div
      dataField={dataField}
      dataFormat={dataFormat}
      dataHeader={dataHeader}
      isSubHeader={isSubHeader}
      containSubHeader={containSubHeader}
      rowcolSpan={rowcolSpan}
      headerClassName={headerClassName}
    />
  );
}
export default class Table extends Component {
  getFields = () => {
    const {
      props: { data, children },
    } = this;
    const numberOfChildren = Children.count(children);
    if (numberOfChildren > 0) {
      const isSubheaderCollection = Children.map(children, (child) => child.props.isSubHeader);
      const containSubHeaderCollection = Children.map(children, (child) => child.props.containSubHeader);
      const fields = Children.map(children, (child) => child.props.dataField);
      const rowColSpanValue = Children.map(children, (child) => child.props.rowcolSpan);
      const headClassName = Children.map(children, (child) => child.props.headerClassName);

      return {
        fields,
        rowColSpanValue,
        headClassName,
        isSubheaderCollection,
        containSubHeaderCollection,
      };
    }
    return data[0] ? Object.keys(data[0]) : [];
  };

  getHeaderData = (field) => {
    const {
      props: { children },
    } = this;
    const numberOfChildren = Children.count(children);
    if (numberOfChildren > 0) {
      const tableChildren = Children.toArray(children);
      const tableChildWithSameFieldAndDataHeader = tableChildren.find(
        (child) => child.props.dataField === field && child.props.dataHeader !== null,
      );

      if (tableChildWithSameFieldAndDataHeader) {
        return tableChildWithSameFieldAndDataHeader.props.dataHeader;
      }

      return field;
    }

    if (typeof field === 'object') return null;

    return field;
  };

  getBodyCellData = (row, field, index) => {
    const {
      props: { children },
    } = this;
    const numberOfChildren = Children.count(children);
    if (numberOfChildren > 0) {
      const tableChildren = Children.toArray(children);
      const tableChildWithSameFieldAndDataFormat = tableChildren.find(
        (child) => child.props.dataField === field && child.props.dataFormat !== null,
      );

      if (tableChildWithSameFieldAndDataFormat) {
        return tableChildWithSameFieldAndDataFormat.props.dataFormat(row, row[field], index);
      }

      return row[field];
    }

    if (typeof row[field] === 'object') return null;

    return row[field];
  };

  renderHeader = () => {
    const { fields, rowColSpanValue, headClassName, isSubheaderCollection } = this.getFields();
    const { headerWidths, data } = this.props;
    return fields?.map((field, index) => {
      const isSubHeader = isSubheaderCollection[index];
      const rowCol = rowColSpanValue[index].split('_');
      return (
        !isSubHeader && (
          <th
            key={field}
            {...{ [rowCol[0]]: rowCol[1] }}
            {...{ className: headClassName[index] }}
            {...(headerWidths[index] &&
              data?.length > 0 && {
                style: {
                  width: headerWidths[index],
                  minWidth: headerWidths[index],
                },
              })}
          >
            {this.getHeaderData(field)}
          </th>
        )
      );
    });
  };

  renderSubHeader = () => {
    const { fields, headClassName, isSubheaderCollection } = this.getFields();
    const { headerWidths, data } = this.props;
    return fields.map((field, index) => {
      const isSubHeader = isSubheaderCollection[index];
      return (
        isSubHeader && (
          <th
            key={field}
            {...{ className: headClassName[index] }}
            {...(headerWidths[index] && data.length > 0 && { style: { width: headerWidths[index] } })}
          >
            {this.getHeaderData(field)}
          </th>
        )
      );
    });
  };

  renderRow = () => {
    const {
      props: { data, uniqueKey, onRowClick },
    } = this;
    const { fields, containSubHeaderCollection } = this.getFields();

    if (fields?.length > 0 && data?.length === 0) {
      return (
        <tr>
          <td colSpan={fields.length}>No data available.</td>
        </tr>
      );
    }

    return data?.map((row, index) => {
      return (
        // eslint-disable-next-line
        <tr
          key={`tr_${row.id}`}
          {...(onRowClick && {
            onClick: () => onRowClick(row),
            style: { cursor: 'pointer' },
          })}
        >
          {fields?.map((field, ind) => {
            return (
              !containSubHeaderCollection[ind] && (
                <td
                  // eslint-disable-next-line
                  key={`${field}_${row[field] || ind}_${
                    row[uniqueKey] || ind
                  }`.replace(/ /g, '_')}
                >
                  {this.getBodyCellData(row, field, index)}
                </td>
              )
            );
          })}
        </tr>
      );
    });
  };

  render() {
    const { showHeader, className, style, tableClassName } = this.props;

    return (
      <div className={`naxa-table is-overflow ${tableClassName}`} style={style}>
        <table className={`table ${className}`}>
          {showHeader && (
            <thead>
              <tr>{this.renderHeader()}</tr>
              <tr>{this.renderSubHeader()}</tr>
            </thead>
          )}
          <tbody>{this.renderRow()}</tbody>
        </table>
      </div>
    );
  }
}

TableHeader.defaultProps = {
  dataField: '',
  dataFormat: null,
  dataHeader: null,
  rowcolSpan: '',
  headerClassName: '',
  isSubHeader: false,
  containSubHeader: false,
};

TableHeader.propTypes = {
  dataField: PropTypes.string,
  dataFormat: PropTypes.func,
  dataHeader: PropTypes.string,
  rowcolSpan: PropTypes.string,
  headerClassName: PropTypes.string,
  isSubHeader: PropTypes.bool,
  containSubHeader: PropTypes.bool,
};

Table.defaultProps = {
  uniqueKey: '',
  children: null,
  showHeader: true,
  onRowClick: null,
  className: '',
  tableClassName: '',
  style: {},
  headerWidths: [],
  loadMoreRef: null,
  parentloadMoreRef: null,
  rowColSpanNum: [],
  rowcolSpanName: [],
  headClassName: [],
};

Table.propTypes = {
  uniqueKey: PropTypes.string,
  data: PropTypes.array.isRequired,
  children: PropTypes.node,
  showHeader: PropTypes.bool,
  onRowClick: PropTypes.func,
  className: PropTypes.string,
  tableClassName: PropTypes.string,
  style: PropTypes.object,
  headerWidths: PropTypes.array,
  loadMoreRef: PropTypes.object,
  parentloadMoreRef: PropTypes.object,
  rowColSpanNum: PropTypes.array,
  headClassName: PropTypes.array,
  rowcolSpanName: PropTypes.array,
};
