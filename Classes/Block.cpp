#include "Block.h"

//��ʼ��blocks
Vector<Block*> * Block::blocks = new Vector<Block*>();

Vector<Block*> * Block::getBlocks()
{
	return Block::blocks;
}

Block* Block::createWithArgs(Color3B color, Size size, std::string label, float fontSize, Color4B textColor)
{
	auto b = new Block();
	b->initWithArgs(color, size, label, fontSize, textColor);
	b->autorelease();

	//��b��ӵ�blocks��
	blocks->pushBack(b);

	return b;
}

//��ʼ��������������ɫ�������С���֡������С��������ɫ
bool Block::initWithArgs(Color3B color, Size size, std::string label, float fontSize, Color4B textColor)
{
	Sprite::init();

	lineIndex = 0;

    //���ô�С
	setContentSize(size);
	//����ê��Ϊ���½�
	setAnchorPoint(Point::ZERO);
	//��������
	setTextureRect(Rect(0, 0, size.width, size.height));
	//������ɫ
	setColor(color);

	//��������
	auto myLabel = Label::create();
	myLabel->setString(label);
	myLabel->setSystemFontSize(fontSize);
	myLabel->setTextColor(textColor);
	addChild(myLabel);
	myLabel->setPosition(size.width/2, size.height/2);

	return true;
}

//��Vector���Ƴ�blocks
void Block::removeBlock()
{
	auto c = getColor();
	log("Remove block, touch color is (%d,%d,%d)", c.r, c.g, c.b);

	removeFromParent();
	blocks->eraseObject(this);
}

void Block::setLineIndex(int index)
{
	this->lineIndex = index;
}

int Block::getLineIndex()
{
	return this->lineIndex;
}

void Block::moveDowm()
{
	this->lineIndex--;
	Size visibleSize = Director::getInstance()->getVisibleSize();
	runAction(Sequence::create(MoveTo::create(0.1f, Point(getPositionX(), lineIndex*visibleSize.height/4)), 
		CallFunc::create([this]()
	{
		if(lineIndex<0)
			this->removeBlock();
	}), NULL));
}