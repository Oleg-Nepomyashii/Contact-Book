import React from 'react';

const Title = ({
	tag: Tag,
	text,
	className,
	id
}) => {
	return (
		<Tag id={id} className={className}>
			{text}
		</Tag>
	)
}

export default Title