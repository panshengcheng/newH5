#include "Block.h"

//初始化blocks
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

	//将b添加到blocks中
	blocks->pushBack(b);

	return b;
}

//初始化参数：方块颜色、方块大小、字、字体大小、字体颜色
bool Block::initWithArgs(Color3B color, Size size, std::string label, float fontSize, Color4B textColor)
{
	Sprite::init();

	lineIndex = 0;

    //设置大小
	setContentSize(size);
	//设置锚点为左下角
	setAnchorPoint(Point::ZERO);
	//设置区域
	setTextureRect(Rect(0, 0, size.width, size.height));
	//设置颜色
	setColor(color);

	//设置文字
	auto myLabel = Label::create();
	myLabel->setString(label);
	myLabel->setSystemFontSize(fontSize);
	myLabel->setTextColor(textColor);
	addChild(myLabel);
	myLabel->setPosition(size.width/2, size.height/2);

	return true;
}

//从Vector中移除blocks
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